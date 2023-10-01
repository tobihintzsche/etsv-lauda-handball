const TestPage = () => {
  const testObject = {
    male: ['Team A', 'Team B', 'Team C'],
    female: ['Team X', 'Team Y'],
  }

  // JAVASCRIPT
  const result = Object.entries(testObject).map(([gender, teams]) => {
    return { gender, teams }
  })

  const object = Object.entries(testObject).map(([firstVal, secondVal]) => {
    return { gender: firstVal, teams: secondVal }
  })

  console.log(
    object.map((teamObject) =>
      teamObject.teams.map((teamName, index) => {
        return { index, teamName }
      })
    )
  )

  console.log(result.length)

  // RAMDA

  return <div className="text-2xl">{JSON.stringify(result)}</div>
}

export default TestPage
