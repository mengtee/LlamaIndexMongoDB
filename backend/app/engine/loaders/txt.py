import os
from llama_parse import LlamaParse
from pydantic import BaseModel, validator
from typing import List

class TxtLoaderConfig(BaseModel):
    file_paths: List[str]
    use_llama_parse: bool = False

    @validator("file_paths")
    def file_paths_must_exist(cls, v):
        for file_path in v:
            if not os.path.isfile(file_path):
                raise ValueError(f"File '{file_path}' does not exist")
        return v
def llama_parse_parser():
    if os.getenv("LLAMA_CLOUD_API_KEY") is None:
        raise ValueError(
            "LLAMA_CLOUD_API_KEY environment variable is not set. "
            "Please set it in .env file or in your shell environment then run again!"
        )
    parser = LlamaParse(result_type="markdown", verbose=True, language="en")
    return parser


def get_txt_documents(config: TxtLoaderConfig):
    documents = []
    for file_path in config.file_paths:
        with open(file_path, 'r') as f:
            text = f.read()
            if config.use_llama_parse:
                parser = llama_parse_parser()
                parsed_text = parser.parse(text)
                documents.append({"text": parsed_text, "file_path": file_path})
            else:
                documents.append({"text": text, "file_path": file_path})
    return documents