# Sentence Window Retrieval optimal window size 
from trulens_eval import Tru
from app.engine import get_chat_engine
import os
from app.engine.loaders import get_documents
from llama_index.core.settings import Settings

module_dir = os.path.dirname(__file__)
file_path = os.path.join(module_dir, 'generated_questions.text')

eval_questions = []
with open(file_path, 'r') as file:
    for line in file:
        # Remove newline character and convert to integer
        item = line.strip()
        eval_questions.append(item)
        print(item)

def run_evals(eval_questions, tru_recorder, query_engine):
    for question in eval_questions:
        with tru_recorder as recording:
            response = query_engine.query(question)

from app.trulens.utils import build_sentence_window_index, get_sentence_window_query_engine, get_prebuilt_trulens_recorder

Tru().reset_database()

documents = get_documents()

sentence_index_1 = build_sentence_window_index(
    documents,
    llm=Settings.llm,
    embed_model=Settings.embed_model,
    sentence_window_size=1,
    save_dir="sentence_index_1",
)

sentence_window_engine_1 = get_sentence_window_query_engine(
    sentence_index_1
)
tru_recorder_1 = get_prebuilt_trulens_recorder(
    sentence_window_engine_1,
    app_id='sentence window engine 1'
)

sentence_index_2 = build_sentence_window_index(
    documents,
    llm=Settings.llm,
    embed_model=Settings.embed_model,
    sentence_window_size=2,
    save_dir="sentence_index_2",
)
sentence_window_engine_2 = get_sentence_window_query_engine(
    sentence_index_2
)
tru_recorder_2 = get_prebuilt_trulens_recorder(
    sentence_window_engine_2,
    app_id='sentence window engine 2'
)

sentence_index_3 = build_sentence_window_index(
    documents,
    llm=Settings.llm,
    embed_model=Settings.embed_model,
    sentence_window_size=3,
    save_dir="sentence_index_3",
)
sentence_window_engine_3 = get_sentence_window_query_engine(
    sentence_index_3
)
tru_recorder_3 = get_prebuilt_trulens_recorder(
    sentence_window_engine_3,
    app_id='sentence window engine 3'
)

run_evals(eval_questions, tru_recorder_1, sentence_window_engine_1)
run_evals(eval_questions, tru_recorder_2, sentence_window_engine_2)
# run_evals(eval_questions, tru_recorder_3, sentence_window_engine_3)

Tru().run_dashboard()