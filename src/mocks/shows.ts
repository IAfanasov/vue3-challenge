import type { Show } from '@/services/showsApi'

export const shows: Show[] = [
  {
    id: 1,
    url: 'https://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2013-06-24',
    ended: '2015-09-10',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    schedule: {
      time: '22:00',
      days: ['Thursday']
    },
    rating: {
      average: 6.5
    },
    weight: 99,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
      },
      officialSite: 'https://www.cbs.com/'
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: 'tt1553656'
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
    },
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1704794065,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1'
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/185054',
        name: 'The Enemy Within'
      }
    }
  },
  {
    id: 2,
    url: 'https://www.tvmaze.com/shows/2/person-of-interest',
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Crime', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2011-09-22',
    ended: '2016-06-21',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    schedule: {
      time: '22:00',
      days: ['Tuesday']
    },
    rating: {
      average: 8.8
    },
    weight: 99,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
      },
      officialSite: 'https://www.cbs.com/'
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28376,
      thetvdb: 248742,
      imdb: 'tt1839578'
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg'
    },
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    updated: 1709303296,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/2'
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/659372',
        name: 'return 0'
      }
    }
  }
]
