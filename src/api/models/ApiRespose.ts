import { VoiceActor } from './VoiceActor'

export interface ApiResponse {
  pagination: {
    pageSize: number
    currentPage: number
    totalPages: number
  }
  voiceActors: VoiceActor[]
}