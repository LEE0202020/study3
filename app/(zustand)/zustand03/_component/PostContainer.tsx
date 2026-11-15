"use client"

import { getPosts, Post } from "@/api/post/post.api"; // 만든 전역 상태 store
import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import PostContainer from "./_component/PostContainer";

export default function