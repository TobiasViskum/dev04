import { execute } from "@/lib/db";

export async function getProfileData(uid: string) {
  const q =
    "SELECT * FROM dim_profile AS A INNER JOIN dim_profile_group AS B ON A.profile_group_id = B.id WHERE A.uid=(?)";
  const val = [uid];

  const tempProfileData1: ProfileDataBefore[] = await execute(q, val);
  if (tempProfileData1[0].favorites != null) {
    tempProfileData1[0].favorites = JSON.parse(tempProfileData1[0].favorites);
  }
  const tempProfileData2 = JSON.stringify(tempProfileData1);
  const profileData: ProfileData[] = JSON.parse(tempProfileData2);

  return profileData;
}
