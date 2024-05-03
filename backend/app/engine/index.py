import logging
import os

from llama_index.core.indices import VectorStoreIndex
from llama_index.vector_stores.mongodb import MongoDBAtlasVectorSearch
from llama_index.core.settings import Settings
from llama_index.core.node_parser import SentenceWindowNodeParser
from app.engine.loaders import get_documents


logger = logging.getLogger("uvicorn")


def get_index():
    logger.info("Connecting to index from MongoDB...")
    print(os.environ["MONGODB_DATABASE"])

    store = MongoDBAtlasVectorSearch(
        db_name=os.environ["MONGODB_DATABASE"],
        collection_name=os.environ["MONGODB_VECTORS"],
        index_name=os.environ["MONGODB_VECTOR_INDEX"],
    )

    index = VectorStoreIndex.from_vector_store(store, show_progress = True)
    logger.info("Finished connecting to index from MongoDB.")
    return index

def get_play_waiting_game_index():
    logger.info("Connecting to index from MongoDB...")
    print(os.environ["MONGODB_DATABASE"])

    store = MongoDBAtlasVectorSearch(
        db_name=os.environ["MONGODB_DATABASE"],
        collection_name=os.environ["MONGODB_PODCAST1"],
        index_name=os.environ["MONGODB_PODCAST1_VECTOR_INDEX"],
    )

    index = VectorStoreIndex.from_vector_store(store, show_progress = True, node_parser = Settings.node_parser)
    logger.info("Finished connecting to index from MongoDB.")
    return index