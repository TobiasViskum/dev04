import { execute } from ".";

export async function getProfileData() {
  const q =
    "SELECT * FROM dim_profile AS A INNER JOIN dim_profile_group AS B ON A.profile_group_id = B.id WHERE A.uid=(?)";
  const val = ["d5141240-33e2-4d7a-807e-e5df34b64d71"];

  const profileData = await execute<ProfileData>(q, val);

  return profileData;
}
