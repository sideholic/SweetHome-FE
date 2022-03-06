import {
  Category,
  HeaderSearch,
  HeaderTop,
  Logo,
  SearchBarDiv,
} from "../styles/HeaderStyle";
import { CommInner } from "../styles/GlobalStyle";
import SearchBar from "../components/header/SearchBar";
import { SearchCategory } from "../styles/SearchStyle";
import SearchResult from "../components/search/SearchResult";
import React from "react";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <>
      <HeaderTop>
        <Link to="/">
          <Logo>SWEET HOME</Logo>
        </Link>
      </HeaderTop>
      {/* 검색바 */}
      <HeaderSearch>
        <CommInner>
          <SearchBarDiv>
            <SearchBar />
            {/* 카테고리 리스트 */}
            <SearchCategory>
              <Category>
                <li>
                  <a>#서울</a>
                </li>
                <li>
                  <a>#경기</a>
                </li>
                <li>
                  <a>#부산</a>
                </li>
                <li>
                  <a>#대구</a>
                </li>
                <li>
                  <a>#강원</a>
                </li>
              </Category>
            </SearchCategory>
          </SearchBarDiv>
        </CommInner>
      </HeaderSearch>
      {/* 검색결과 */}
      <SearchResult />
      {/* 푸터 */}
      <Footer />
    </>
  );
}
