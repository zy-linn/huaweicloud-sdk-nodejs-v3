import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class KmsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://kms.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://kms.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://kms.cn-north-2.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://kms.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://kms.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://kms.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://kms.cn-south-2.myhuaweicloud.com");
    public static AF_SOUTH_1 = new Region("af-south-1", "https://kms.af-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://kms.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://kms.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://kms.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://kms.ap-southeast-3.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://kms.la-south-2.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://kms.sa-brazil-1.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://kms.na-mexico-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://kms.la-north-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://kms.cn-north-9.myhuaweicloud.com");
    

    private static STATIC_FIELDS = KmsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", KmsRegion.CN_NORTH_4);
        map.set("cn-north-1", KmsRegion.CN_NORTH_1);
        map.set("cn-north-2", KmsRegion.CN_NORTH_2);
        map.set("cn-east-2", KmsRegion.CN_EAST_2);
        map.set("cn-east-3", KmsRegion.CN_EAST_3);
        map.set("cn-south-1", KmsRegion.CN_SOUTH_1);
        map.set("cn-south-2", KmsRegion.CN_SOUTH_2);
        map.set("af-south-1", KmsRegion.AF_SOUTH_1);
        map.set("cn-southwest-2", KmsRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", KmsRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", KmsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", KmsRegion.AP_SOUTHEAST_3);
        map.set("la-south-2", KmsRegion.LA_SOUTH_2);
        map.set("sa-brazil-1", KmsRegion.SA_BRAZIL_1);
        map.set("na-mexico-1", KmsRegion.NA_MEXICO_1);
        map.set("la-north-2", KmsRegion.LA_NORTH_2);
        map.set("cn-north-9", KmsRegion.CN_NORTH_9);
        return map;
    }
    public static valueOf(regionId: String) {
        if (!regionId) {
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.STATIC_FIELDS.get(regionId);
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}