<template>
  <header class="root-intro">
    <pre class="ascii">
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
      <p>
        By Bernard Wang A.K.A. XxBEn3rdxX@hotmail.com
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "TextIntro"
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-intro {
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-title {
  margin-top: 1rem;
  text-align: center;
}
</style>
