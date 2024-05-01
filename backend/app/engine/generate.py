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
from llama_index.core.service_context import ServiceContext
from llama_index.core import set_global_service_context


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
    print("printing documents")
    print("Complete running get document")
    print(documents)

    store = MongoDBAtlasVectorSearch(
        db_name=os.environ["MONGODB_DATABASE"],
        collection_name=os.environ["MONGODB_VECTORS"],
        index_name=os.environ["MONGODB_VECTOR_INDEX"],
    )
    storage_context = StorageContext.from_defaults(vector_store=store)
    VectorStoreIndex.from_documents(
        documents,
        storage_context=storage_context,
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
