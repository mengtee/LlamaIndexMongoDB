import os
from app.engine.index import get_index
from llama_index.core.postprocessor import MetadataReplacementPostProcessor


def get_chat_engine():
    system_prompt = os.getenv("SYSTEM_PROMPT")
    top_k = os.getenv("TOP_K", 3)

    index = get_index()
    if index is None:
        raise Exception(
            "StorageContext is empty - call 'python app/engine/generate.py' to generate the storage first"
        )
    print(index)
    print("StorageContext is not empty")
    
    return index.as_chat_engine(
        similarity_top_k=int(top_k),
        system_prompt=system_prompt,
        chat_mode="condense_plus_context",
        # Creating sentence window retrieval method
        node_postprocessors=[
        MetadataReplacementPostProcessor(target_metadata_key="window")
    ],
        verbose = True,
    )
