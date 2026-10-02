declare module "*.asset.json" {
  const asset: {
    url: string;
    asset_id: string;
    project_id: string;
    content_type: string;
    [key: string]: string | number;
  };
  export default asset;
}
