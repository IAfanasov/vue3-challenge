import axios from 'axios'

const showsApiClient = axios.create({
  baseURL: 'https://api.tvmaze.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const showsApi = {
  getShows(page = 0) {
    return showsApiClient.get<Show[]>(`/shows?page=${page}`)
  },
  getShowMainInfo(id: number) {
    return showsApiClient.get<Show>(`/shows/${id}`)
  },
  searchShows(query: string) {
    return showsApiClient.get<ScoredShow[]>(`/search/shows?q=${query}`)
  }
}

export interface Schedule {
  time: string
  days: string[]
}

export interface Rating {
  average: number | null
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Network {
  id: number
  name: string
  country: Country
  officialSite?: string
}

export interface Externals {
  tvrage?: number
  thetvdb?: number
  imdb?: string
}

export interface Image {
  medium: string
  original: string
}

export interface Links {
  self: {
    href: string
  }
  previousepisode?: {
    href: string
    name?: string
  }
}

export interface Schedule {
  time: string
  days: string[]
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Links {
  self: {
    href: string
  }
  previousepisode?: {
    href: string
    name?: string
  }
}

export interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number | null
  averageRuntime: number | null
  premiered: string | null
  ended: string | null
  officialSite?: string
  schedule: Schedule
  rating: Rating
  weight: number
  network?: Network | null
  webChannel?: any
  dvdCountry?: any
  externals: Externals
  image?: Image
  summary?: string | null
  updated: number
  _links: Links
}

export interface ScoredShow {
  score: number
  show: Show
}
