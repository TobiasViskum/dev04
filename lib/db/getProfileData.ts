import { execute } from ".";

export async function getProfileData(uid: string) {
  const q =
    "SELECT * FROM dim_profile AS A INNER JOIN dim_profile_group AS B ON A.profile_group_id = B.id WHERE A.uid=(?)";
  const val = [uid];

  const profileData: ProfileData[] = await execute(q, val);

  return profileData;
}
