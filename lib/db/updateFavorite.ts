import { execute } from ".";

function getFavoriteState(prevFavortiesState: object | null) {
  let favoriteState: any;
  if (prevFavortiesState == null) {
    favoriteState = {};
  } else {
    favoriteState = prevFavortiesState;
  }
  return favoriteState;
}

async function updateFromNullToObject(name_id: object, uid: string) {
  const query = "UPDATE dim_profile SET favorites=? WHERE uid=?";
  const values = [name_id, uid];
  await execute(query, values);
}

async function insertFavorite(name_id: string, uid: string, prevFavortiesState: object | null) {
  let favoriteState = getFavoriteState(prevFavortiesState);

  const query_2 = `UPDATE dim_profile SET favorites=? WHERE uid=?`;
  favoriteState[name_id] = name_id;
  const values_2 = [JSON.stringify(favoriteState), uid];

  await execute(query_2, values_2);
}

async function deleteFavorite(name_id: string, uid: string, prevFavortiesState: object | null) {
  let favoriteState = getFavoriteState(prevFavortiesState);

  const query_2 = `UPDATE dim_profile SET favorites=? WHERE uid=?`;
  delete favoriteState[name_id];
  const values_2 = [JSON.stringify(favoriteState), uid];

  await execute(query_2, values_2);
}

export async function updateFavorite(
  uid: string,
  newState: boolean,
  name_id: string | object,
  prevFavortiesState?: object | null
) {
  if (newState == false && typeof name_id == "object") {
    await updateFromNullToObject(name_id, uid); //if favorites has to be updated from null to {}
    return;
  } else if (newState && typeof name_id == "string" && prevFavortiesState != undefined) {
    await insertFavorite(name_id, uid, prevFavortiesState); //add item to favorite
    return;
  } else if (newState == false && typeof name_id == "string" && prevFavortiesState != undefined) {
    await deleteFavorite(name_id, uid, prevFavortiesState);
    return;
  }
  return;
}
