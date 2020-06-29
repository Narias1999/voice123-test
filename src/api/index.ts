import { ApiResponse } from './models/ApiRespose'
import { VoiceActor } from './models/VoiceActor'

const BASE_URL = "https://api.sandbox.voice123.com/providers/search/?service=voice_over&";

const urlBuilder = (keyword: string, page: number): string => `${BASE_URL}keyword=${keyword}&page=${page}`;


export async function getActors(keyword = '', page = 1): Promise<ApiResponse> {
  const url = urlBuilder(keyword, page);

  const response = await fetch(url);
  const headers = response.headers;

  const data = await response.json();

  return {
    pagination: {
      currentPage: Number(headers.get('x-list-current-page')),
      pageSize: Number(headers.get('x-list-current-page')),
      totalPages: Number(headers.get('x-list-total-pages'))
    },
    voiceActors: data.providers as VoiceActor[]
  }
}