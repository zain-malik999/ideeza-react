import React from "react";
import { AvatarLabel } from "molecules";
import { Label } from "atoms";
function BlogArticlePreview() {
  return (
    <>
      <div className="bg-white rounded-md mt-3">
        <img
          src="/assets/images/blog/article.png"
          width="100%"
          alt=""
          srcset=""
        />
        <div className="md:p-10 p-4 pt-10">
          <div className="h-50vh overflow-y-auto lg:px-32 md:px-10 px-3">
            <Label
              value={
                <>
                  How Ideeza <p>can make the world a better place</p>
                </>
              }
              classes={{
                root:
                  "text-center mx-auto text-4xl xl:w-2/4 md:w-3/4 font-normal pb-6 text-black-100 font-meri",
              }}
            />
            <AvatarLabel
              labelValue="Tayyab Mughal"
              label2Value="May 6, 2020"
              labelClasses={{
                root: "text-gray-300 font-rale text-base font-semibold",
              }}
              label2Classes={{ root: "text-gray-300 text-xs font-pt" }}
              avatarSrc={
                <img
                  src="/assets/images/blog/article.png"
                  className={{ root: "rounded-lg h-16 w-16" }}
                  alt=""
                  srcset=""
                />
              }
            />
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus nisl at mauris condimentum, vitae semper tellus aliquam. In ante sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget gravida diam congue sed. Phasellus ut fringilla magna, nec sodales turpis. Aliquam in velit nunc."
              classes={{
                root:
                  "md:text-lg text-base md:leading-9 leading-8d font-light pb-4 pt-2 text-gray-700 font-muli",
              }}
            />
            <img
              src="/assets/images/blog/article.png"
              className="max-h-96 rounded-lg"
              width="100%"
              max-height="10px"
              alt=""
              srcset=""
            />
            <Label
              value="Type caption for image (optional)"
              classes={{ root: "text-xs text-gray-900 text-center py-2" }}
            />
            <Label
              value={
                <>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eget interdum urna, ac ornare risus. Vivamus
                  finibus nisl at mauris condimentum, vitae semper tellus
                  aliquam. In ante sapien, congue ut feugiat vel, placerat ut
                  erat. Quisque at nulla nisl. Vivamus a egestas magna. Cras
                  condimentum est arcu, eget gravida diam congue sed. Phasellus
                  ut fringilla magna, nec sodales turpis. Aliquam in velit nunc.
                  <p className="mt-10">
                    Quisque ut tellus ac orci varius dignissim nec non orci.
                    Fusce tincidunt molestie facilisis. Donec nec euismod dui,
                    ac blandit justo. Sed arcu orci, porttitor sit amet metus
                    et, fringilla aliquet elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla eu justo vitae est
                    vestibulum pulvinar. Phasellus tempor vestibulum dui. Proin
                    tincidunt arcu quis quam suscipit iaculis. Namodio nunc,
                    pharetra ac malesuada sed, sagittis id elit. Integer
                    convallis leo id auctor faucibus.
                  </p>
                </>
              }
              classes={{
                root:
                  "md:text-lg text-base md:leading-9 leading-8d pb-4 pt-2 text-gray-700 font-muli",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArticlePreview;
