import GamemodeButton from "./gamemodeButton"

function createGamemode(name, url) {
  return {
    name: name,
    url: url
  } 
}

export default function Home() {
  const gamemodes = [
    createGamemode("Guess The Item from description", "item-guess"),
  ]

  return (
    <main>
      <div className="mt-10 flex flex-col justify-center items-center gap-10">
        { gamemodes.map((gamemode, id) => {
          return (
            <GamemodeButton text={gamemode.name} url={gamemode.url} key={"league-button-homepage-" + id}/>
          )
        })}
      </div>
    </main>
  )
}
