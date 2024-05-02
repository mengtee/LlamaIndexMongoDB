from dotenv import load_dotenv

load_dotenv()

import os
import logging
from llama_index.core.storage import StorageContext
from llama_index.core.indices import VectorStoreIndex
from llama_index.vector_stores.mongodb import MongoDBAtlasVectorSearch
from app.settings import init_settings
from app.engine.loaders import get_documents
from llama_index.core.settings import Settings
from llama_index.core.node_parser import SentenceWindowNodeParser
from llama_index.core import ServiceContext


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

# service_context = ServiceContext.from_defaults(embed_model=Settings.embed_model)
# set_global_service_context(service_context)

def generate_datasource():

    print("This is the settings embed model")
    print(Settings.embed_model)
    logger.info("Creating new index")
    # load the documents and create the index
    documents = get_documents()

    # Defining node parser
    node_parser = SentenceWindowNodeParser.from_defaults(
        window_size=3,
        window_metadata_key="window",
        original_text_metadata_key="original_text",
    )

    nodes = node_parser.get_nodes_from_documents(documents)
    base_nodes = Settings.text_splitter.get_nodes_from_documents(documents)
    print("This is the nodes")
    print([x.text for x in nodes])
    print(nodes[1].metadata["window"])

    sentence_context = ServiceContext.from_defaults(
        llm=Settings.llm,
        embed_model=Settings.embed_model,
        node_parser=node_parser,
    )

    store = MongoDBAtlasVectorSearch(
        db_name=os.environ["MONGODB_DATABASE"],
        collection_name=os.environ["MONGODB_VECTORS"],
        index_name=os.environ["MONGODB_VECTOR_INDEX"],
    )
    storage_context = StorageContext.from_defaults(vector_store=store)
    VectorStoreIndex.from_documents(
        documents,
        storage_context=storage_context,
        service_context=sentence_context,
        embed_model = Settings.embed_model,
        show_progress=True,  # this will show you a progress bar as the embeddings are created
    )
    logger.info(
        f"Successfully created embeddings in the MongoDB collection {os.environ['MONGODB_VECTORS']}"
    )
    logger.info(
        """IMPORTANT: You can't query your index yet because you need to create a vector search index in MongoDB's UI now.
See https://github.com/run-llama/mongodb-demo/tree/main?tab=readme-ov-file#create-a-vector-search-index"""
    )


if __name__ == "__main__":
    init_settings()
    generate_datasource()
