interface ProfilesNoJoin {
  id: number;
  name: string;
  mail: string;
  uid: string;
  profile_group_id: number;
  is_reps_default: number;
  is_text_centered: number;
  language: string;
  show_vas_fitness: number;
  show_vas_cardio: number;
  is_animations_enabled: number;
  favorites: string;
  role: string;
  password: string;
}
interface objectJSONFavorite {
  [key: string]: string;
}
type FavoriteJSON = objectJSONFavorite | null;

interface ProfileDataBefore {
  id: number;
  name: string;
  mail: string;
  uid: string;
  profile_group_id: number;
  is_reps_default: number;
  is_text_centered: number;
  language: string;
  show_vas_fitness: number;
  show_vas_cardio: number;
  is_animations_enabled: number;
  fitness_app: number;
  hund_app: number;
  cardio_app: number;
  compete_app: number;
  greetings_statement: string;
  description_statement: string;
  chat_app: number;
  greetings_statement_danish: string;
  description_statement_danish: string;
  last_name: string;
  favorites: string | null;
  role: string;
  password: string;
}
interface ProfileData {
  id: number;
  name: string;
  mail: string;
  uid: string;
  profile_group_id: number;
  is_reps_default: number;
  is_text_centered: number;
  language: string;
  show_vas_fitness: number;
  show_vas_cardio: number;
  is_animations_enabled: number;
  fitness_app: number;
  hund_app: number;
  cardio_app: number;
  compete_app: number;
  greetings_statement: string;
  description_statement: string;
  chat_app: number;
  greetings_statement_danish: string;
  description_statement_danish: string;
  last_name: string;
  favorites: FavoriteJSON;
  role: string;
  password: string;
}

interface AppData {
  id: number;
  name_id: string;
  name: string;
  category: string;
}
