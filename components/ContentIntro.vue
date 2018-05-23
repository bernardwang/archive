<template>
  <header class="root-intro">
    <pre class="intro-ascii">
                               ,---,
                             ,--.' |      ,--,
              __  ,-.        |  |  :    ,--.'|
            ,' ,'/ /|        :  :  :    |  |,      .---.
   ,--.--.  '  | |' | ,---.  :  |  |,--.`--'_    /.  ./|  ,---.
  /       \ |  |   ,'/     \ |  :  '   |,' ,'| .-' . ' | /     \
 .--.  .-. |'  :  / /    / ' |  |   /' :'  | |/___/ \: |/    /  |
  \__\/: . .|  | ' .    ' /  '  :  | | ||  | :.   \  ' .    ' / |
  ," .--.; |;  : | '   ; :__ |  |  ' | :'  : |_\   \   '   ;   /|
 /  /  ,.  ||  , ; '   | '.'||  :  :_:,'|  | '.'\   \  '   |  / |
;  :   .'   \---'  |   :    :|  | ,'    ;  :    ;\   \ |   :    |
|  ,     .-./       \   \  / `--''      |  ,   /  '---" \   \  /
 `--`---'            `----'              ---`-'          `----'
    </pre>
    <div class="intro-title">
      <h1>
        archive.bernard.wang Version 1.0.1
      </h1>
      <h2>
        By Bernard Wang A.K.A. XxBEn3rdxX@hotmail.com
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "ContentIntro"
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-intro {
  padding: 2.5rem 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-ascii {
  line-height: 0.8;
  letter-spacing: -1px;
  word-spacing: 0px;
  font-size: 1.1rem;
}
.intro-title {
  margin-top: 1rem;
  text-align: center;
}
</style>
