import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StakeFilter() {
  return (
    <Tabs defaultValue="token-staking" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="token-staking">Token Staking</TabsTrigger>
        <TabsTrigger value="nft-staking">NFT Staking</TabsTrigger>
      </TabsList>
      <TabsContent value="token-staking"></TabsContent>
      <TabsContent value="nft-staking"></TabsContent>
    </Tabs>
  );
}
