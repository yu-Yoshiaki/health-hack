import type { CustomNextPage } from "next";
import { Layout } from "src/component";

const ErrorPage: CustomNextPage = () => {
  return (
    <Layout header="404: お探しのページが存在しません。">
      <div></div>
    </Layout>
  );
};

export default ErrorPage;