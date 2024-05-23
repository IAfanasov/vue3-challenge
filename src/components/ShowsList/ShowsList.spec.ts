import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowsList from './ShowsList.vue'

import { shows } from '@/mocks/shows'
import { RouterLinkStub } from '@vue/test-utils'

// use data-test-id instead of css classes or tag names to separate concerns of styling/semantics and testing
function testIdSelector(testId: string) {
  return `[data-test-id=${testId}]`
}

const sharedGlobalStubs = {
  global: {
    stubs: {
      RouterLink: RouterLinkStub
    }
  }
}
// Unit tests code follows AAA convention as it nicely outlined in my article https://medium.com/itnext/mobiquitys-proven-practices-to-help-you-develop-and-exercise-unit-test-related-skills-c9134fac35e1#2446
describe('ShowList.vue', () => {
  it('renders genre title', () => {
    // Arrange
    const genre = 'Drama'

    // Arrange and Act
    const wrapper = mount(ShowsList, {
      props: { genre, shows: [] },
      ...sharedGlobalStubs
    })

    // Assert
    expect(wrapper.find(testIdSelector('genre')).text()).toBe(genre)
  })

  it('renders the same count of shows entries and provided in the shows property', () => {
    // Arrange and Act
    const wrapper = mount(ShowsList, {
      props: {
        genre: 'Drama',
        shows
      },
      ...sharedGlobalStubs
    })

    // Assert
    const showEntries = wrapper.findAll(testIdSelector('show-entry'))
    expect(showEntries.length).toBe(shows.length)
  })

  it('renders show details correctly', () => {
    // Arrange and Act
    const wrapper = mount(ShowsList, {
      props: {
        genre: 'Drama',
        shows
      },
      ...sharedGlobalStubs
    })

    // Assert
    const allShowEntries = wrapper.findAll(testIdSelector('show-entry'))
    shows.forEach((show, index) => {
      const showEntry = allShowEntries[index]
      const img = showEntry.find(testIdSelector('show-image'))
      const title = showEntry.find(testIdSelector('show-title'))

      // consider splitting these assertions into separate tests with shared setup. Personally, I prefer atomic tests - 1 assert per test. It's easy to followup on the failing test this way. My colleagues usually prefer to group them and I don't mind it much either.
      expect(showEntry.getComponent(RouterLinkStub).props().to).toBe(`/show/${show.id}`)
      expect(img.attributes('src')).toBe(show.image?.medium)
      expect(img.attributes('alt')).toBe(show.name)
      expect(title.text()).toBe(show.name)
    })
  })
})
