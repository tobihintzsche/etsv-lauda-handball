import { Team } from '../types/teamTypes'

export interface SortedNavigationTeams {
  men: Team[]
  woman: Team[]
  mixed: Team[]
}

export function sortTeamsByGender(teams: Team[]): SortedNavigationTeams {
  return {
    men: teams.filter((team) => team.gender === 'Maennlich'),
    woman: teams.filter((team) => team.gender === 'Weiblich'),
    mixed: teams.filter((team) => team.gender === 'Gemischt'),
  }
}
