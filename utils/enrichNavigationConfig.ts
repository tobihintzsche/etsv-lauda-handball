import { NavigationConfig, NavigationItem } from '../types/navigationTypes'
import { Team } from '../types/teamTypes'
import { sortTeamsByGender } from './sortTeamsByGender'

export function enrichNavigationConfig(
  navigationConfig: NavigationConfig,
  teams: Team[]
): NavigationConfig {
  const sortedNavigationTeams = sortTeamsByGender(teams)

  const enrichedNavigationConfig: NavigationConfig = {
    navigation: navigationConfig.navigation.map((item: NavigationItem) => {
      if (item.link.title === 'Teams') {
        return {
          ...item,
          subNavigation: {
            men: sortedNavigationTeams.men.map((team) => ({
              title: team.name,
              href: `/teams/${team.slug}`,
            })),
            woman: sortedNavigationTeams.woman.map((team) => ({
              title: team.name,
              href: `/teams/${team.slug}`,
            })),
            mixed: sortedNavigationTeams.mixed.map((team) => ({
              title: team.name,
              href: `/teams/${team.slug}`,
            })),
          },
        }
      } else {
        return item
      }
    }),
  }

  return enrichedNavigationConfig
}
