/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Post } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PostLucan from "./PostLucan";
import { Collection } from "@aws-amplify/ui-react";
export default function PostLucanCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Post,
        }).items;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "PostLucanCollection")}
    >
      {(item, index) => (
        <PostLucan
          post={item}
          height="127px"
          margin="0 0 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PostLucan>
      )}
    </Collection>
  );
}
