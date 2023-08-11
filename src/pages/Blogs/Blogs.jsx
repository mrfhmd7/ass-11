import { Helmet } from "react-helmet";
import titles from "../../title";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>{titles.blogs}</title>
      </Helmet>
      <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 px-5 lg:px-10 py-14">
        {/* 1 */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">
            What is an access token and refresh token ?
          </h3>
          <article className="space-y-3 text-lg">
            <p>
              <span className="font-semibold text-lg">Access Token :</span>
              <li>
                An access token is a string representing an authorization issued
                to the client. Tokens represent specific scopes and duration of
                access, granted by the resource owner, and enforced by the
                resource server and authorization server.
              </li>
            </p>
            <p>
              <span className="font-semibold text-lg">Refresh Token :</span>
              <li>
                A refresh token is issued (along with access token) to the
                client by the authorization server. The responsibility of
                refresh token is to request for a new access token when the
                existing access token is expired.
              </li>
            </p>
          </article>
        </section>
        {/* 2 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">
            How do they work and where should we store them on client side ?
          </h3>
          <article className="space-y-4 text-lg">
            <p>
              <span className="font-semibold text-lg">Access Token :</span>
              <li>
                An access token is put in the Authorization header of our
                request and it usually looks like ‘Bearer h090Yuuyuiyv’. It is
                verified by the APi, which the client is calling.
              </li>
              <li>
                Access token are usually in JWT format, but you can use any
                other format.
              </li>
              <li>
                Access tokens are usually short lived, because it is difficult
                (although not impossible) to centrally revoke access tokens.
              </li>
              <li>
                The responsibility of access token is to access data before it
                gets expired.
              </li>
              <li>
                Access token should not be stored in local/session storage,
                because they are not a place for any sensitive data. It is best
                to store access token in httpOnly cookie (although it is not
                completely safe).
              </li>
            </p>
            <p>
              <span className="font-semibold text-lg">Refresh Token :</span>
              <li>
                The responsibility of refresh token is to request for a new
                access token when the existing access token is expired.
              </li>
              <li>
                We can also obtain additional access tokens with identical or
                narrower scope from the refresh tokens.
              </li>
              <li>
                Issuing a refresh token is optional at the discretion of the
                authorization server.
              </li>
              <li>Refresh token is long lived token.</li>
              <li>
                Only clients that can safely secure refresh tokens, should use
                refresh tokens.
              </li>
              <li>
                Refresh tokens are usually stored securely on the server side
              </li>
            </p>
          </article>
        </section>
        {/* 3 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">
            Compare SQL and NoSQL databases?
          </h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-lg">SQL</th>
                  <th className="text-lg">NoSQL</th>
                </tr>
              </thead>
              <tbody className="text-[16px]">
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>SQL databases are relational.</td>
                  <td>NoSQL databases are non-relational.</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>
                    SQL databases use structured query language (SQL) and have a
                    predefined schema.
                  </td>
                  <td>
                    NoSQL databases have dynamic schemas for unstructured data.
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>SQL databases are vertically scalable.</td>
                  <td> NoSQL databases are horizontally scalable.</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>SQL databases are table-based.</td>
                  <td>
                    NoSQL databases are document, key-value, graph, or
                    wide-column stores.
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>SQL databases are better for multi-row transactions.</td>
                  <td>
                    NoSQL is better for unstructured data like documents or
                    JSON.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* 4 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">What Is Express JS?</h3>
          <p className="text-lg">
            Express is a node js web application framework that provides broad
            features for building web and mobile applications. It is used to
            build a single page, multipage, and hybrid web application. It's a
            layer built on the top of the Node js that helps manage servers and
            routes.
          </p>
        </section>
        {/* 5 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">What Is Nest JS?</h3>
          <p className="text-lg">
            Nest.JS is a framework for building efficient and scalable
            server-side applications using JavaScript or TypeScript. It is built
            on top of the widely popular Node.js runtime and leverages its
            asynchronous, event-driven nature to provide a robust and reliable
            platform for developing web applications.
          </p>
        </section>
        {/* 6 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">
            What Is MongoDB Aggregation ?
          </h3>
          <p className="text-lg">
            MongoDB Aggregation uses an aggregate() method to perform the
            aggregation operations. Basically, this aggregation operation
            practices data records and provides calculated results. The
            aggregation operations assemble values from various documents
            together and are able to execute a range of operations, such as
            average, sum, maximum, minimum, etc., on the assembled data to
            provide only a result.
          </p>
        </section>
        {/* 7 */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">
            How does Aggregation work in MongoDB ?
          </h3>
          <article className="text-lg">
            <p>
              There is no better method than MongoDB Aggregations when we need
              to collect the metrics from MongoDB for any graphical illustration
              or maybe other operations. Aggregation in MongoDB is responsible
              for processing the data, which results in the calculated outputs,
              generally by assembling the data from several documents and then
              executes in various ways on those assembled data in order to yield
              one collective result. It practices documents and then yield
              computed outputs and thus execute a range of operations on the
              assembled data to return only one result.
            </p>
            <br />
            <p>
              Aggregation in MongoDB was progressed when limitations were viewed
              because of having millions of embedded documents, taking much time
              in processing, and server’s random memory which may terminate the
              operations.
            </p>
            <br />
            <p>
              This MongoDB Aggregation uses the Pipeline concept in the UNIX
              command, where the pipeline defines the possibility to perform an
              operation on few inputs and apply the output resulted as the input
              for the succeeding command, and it follows the same. MongoDB
              supports this idea in the aggregation framework.
            </p>
            <br />
            <p>
              Here, the operators come in three ranges such as stages,
              expressions, and accumulators.
            </p>
            <br />
            <p>
              There is a group of possible stages and every of those is
              considered as a group of documents as an input and generates a
              resulting group of documents otherwise, the last JSON document at
              the completion of the pipeline. This will then, in turn, be
              implemented for the succeeding stage and likewise. Some possible
              stages determined in the aggregation framework are as follows:
            </p>
            <br />
            <p>
              1. $match: It is a filtering operation and therefore this can
              decrease the number of documents that are given as input to the
              succeeding stage.
              <br />
              2. $project: It is applied to choose few particular fields from a
              collection.
              <br />
              3. $group: It performs the concrete aggregation that we are
              discussing overhead.
              <br />
              4. $sort: It helps to sort the documents.
              <br />
              5. $limit: It limits the sum of documents to look at, provided by
              the specific number beginning from the existing positions.
              <br />
              6. $skip: It helps to make skipping possible forwardly in the list
              of documents for a provided sum of documents.
              <br />
              7. $unwind: It is operated to unwind documents which are using
              arrays. While applying an array, the data element is a form of
              pre-joined and then this operation will be uncompleted with this
              to include distinct documents another time. Hence, with the help
              of this stage, we can increase the sum of documents for the
              succeeding stage.
            </p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Blogs;
