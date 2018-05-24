<template>
  <header class="root-intro">
    <pre class="intro-ascii ascii">
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
      <p>
        archive.bernard.wang<br>
        Version 1.3, Updated 05/08/18<br>
        by Bernard Wang &lt;Xxbern3rdxX@hotmail.com&gt;
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
  padding: 3rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-title {
  margin-top: 1rem;
  text-align: center;
}
.intro-ascii {
  @include breakpoint(medium) {
    font-size: 0.6rem;
  }
}
</style>
