fs = require('fs');
nft = require('nft.storage');

NFTStorage = nft.NFTStorage;
File = nft.File;

const endpoint = 'https://api.nft.storage' // the default
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY3MmJEMzc3ODNCRjZkREQyNjdDYmJBODA1ZEEwYjlGNkI1NkI2QjgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NTY0NzczMzY1OCwibmFtZSI6Ik15TmZ0In0.QtTbnWgcgypR_TyLhJATPP_zdpel9Pw1f4oBZBtWDkA' // your API key from https://nft.storage/manage

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  const metadata = await storage.store({
    name: 'Any name',
    description:
      'Beautiful clouds with tall trees standing in between',
    image: new File([await fs.promises.readFile('trees.jpg')], 'trees.jpg', {
      type: 'image/jpg',
    }),
  })
  console.log('IPFS URL for the metadata:', metadata.url);
}
main()