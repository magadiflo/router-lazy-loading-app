export type TypeAnime = 'pokemon' | 'digimon' | 'medabot';

export interface Anime {
    name: string;
    description: string;
    ulrImg: string;
    evolutions?: Anime[];
}