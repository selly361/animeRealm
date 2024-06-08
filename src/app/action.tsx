"use server"

import { AnimeCard } from "@/Components"
import { Anime } from "@/Types"

const MAX_LIMIT = 8

export const fetchAnimes = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=ranked`)

    const animes: Anime[] = await response.json()


    return animes.map((anime, index) => (
        <AnimeCard key={anime.id} anime={anime} index={index} />
    ))

}

