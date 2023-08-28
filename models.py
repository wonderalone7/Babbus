from typing import Union
from pydantic import BaseModel

class JsonData(BaseModel):
    _id: str
    end_year: Union[str, int] 
    intensity: Union[str, int]
    sector: str
    topic: str
    insight: str
    url: str 
    region: str
    impact: Union[str, int] 
    added: str
    published: str
    country: str
    start_year: Union[str, int] 
    relevance: Union[str, int]
    pestle: str
    source: str
    title: str
    likelihood: Union[str, int] 
