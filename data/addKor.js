const { writeFileSync } = require("fs");
const countriesCities = require("./countriescities.json");
console.log(countriesCities);
const cities =
  "홍콩,싱가포르,방콕,푸켓,파타야,치앙마이,런던,마카오,쿠알라룸푸르,심천,광저우,상하이,베이징,항저우,주하이,수주,구린,난징,뉴욕 시티,라스 베이거스,마이애미,로스앤젤레스,올랜도,샌프란시스코,호놀룰루,워싱턴 D.C.,안탈리아,이스탄불,무글라,에드르네,파리,니스,로마,밀라노,베니스,플로렌스,두바이,아부다비,메카,동부 지방,리야드,타이페이 시티,프라하,바르셀로나,마드리드,모스크바,상트페테르부르크,부다페스트,비엔나,암스테르담,소피아,부르가스,호치민 시티,하노이,리마,베를린,뮌헨,프랑크푸르트,도쿄,바르샤바,첸나이,뭄바이,델리,아그라,자이푸르,콜카타,카이로,샤름 엘 쉐이크,나이로비,부에노스 아이레스,멕시코 시티,칸쿤,더블린,서울,덴파사르,자카르타,토론토,밴쿠버,시드니,멜버른,제르바,수스,요하네스버그,부쿠레슈티,푼타카나,브뤼셀,리스본,마라케시,마나마,마닐라,오클랜드,크라이스트처치,시엠립,암만,키예프,도하,리우데자네이루,상파울루,바쿠,하라레".split(
    ","
  );

let current = 0;

writeFileSync(
  "./renew.json",
  JSON.stringify(
    countriesCities.map((countryCities) => {
      return {
        ...countryCities,
        cities: countryCities.cities.map((city) => {
          const kor = cities[current];
          current++;
          return { ...city, kor };
        }),
      };
    })
  )
);
