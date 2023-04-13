export interface TeamNews {
  id: string
  slug: string | null
  title: string
  description: string
  picture: {
    url: string
  }
  createdAt: Date
  team: {
    name: string
  }
}
