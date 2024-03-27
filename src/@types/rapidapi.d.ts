interface ITeam {
  id: number
  name: string
  logo: string
  winner?: boolean
}

interface IGoal {
  home?: number
  away?: number
}

interface IScore {
  halftime: IGoal
  fulltime: IGoal
  extratime: IGoal
  penalty: IGoal
}

interface IVenue {
  id: number
  name: string
  city: string
}

interface IStatus {
  long: string
  short: string
  elapsed?: number
}

interface IPeriod {
  first?: number
  second?: number
}

interface ILeague {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

interface IFixture {
  id: number
  referee?: string
  timezone: string
  date: string
  timestamp: number
  periods: IPeriod
  venue: IVenue
  status: IStatus
}

interface IMatch {
  fixture: IFixture
  league: ILeague
  teams: {
    home: ITeam
    away: ITeam
  }
  goals: IGoal
  score: IScore
}
