import type { CustomNextPage } from "next";

const Success: CustomNextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1>ユーザー登録が完了しました。</h1>
        <div>LINEの方で操作が可能になります。</div>
      </div>
    </div>
  );
};

export default Success;