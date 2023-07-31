import { Suspense, lazy, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { GET_STATS } from "../../api";

import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <Suspense fallback={<div></div>}>
          <UserStatsGraphs data={data} />
        </Suspense>
      </div>
    );
  else return null;
};

export default UserStats;
