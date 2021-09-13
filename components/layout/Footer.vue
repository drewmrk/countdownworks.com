<template>
  <footer role="contentinfo" class="footer">
    <div class="nav">
      <div class="category">
        <p class="title">Holidays</p>
        <ul class="list">
          <li v-for="item in holidays" :key="item.name" class="item">
            <NuxtLink class="link" :to="item.link">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="credits">
      <h1 class="title">
        <a href="/" class="link"> Countdown Works </a>
      </h1>
      <small class="copyright">&copy; Countdown Works {{ currentYear }}</small>
    </div>
  </footer>
</template>

<script>
import holidays from '@/shared/holidays'
import { currentYear } from '~/shared/date'

export default {
  data() {
    return {
      currentYear: currentYear(),
      holidays
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @include flex(column);

  border-top: 1px solid hsl(0, 0%, 18%);

  .category {
    @include flex(column);

    align-items: center;
    background-color: hsl(0, 0%, 9%);

    .title {
      border-bottom: 2px solid hsl(0, 0%, 100%);
      color: hsl(0, 0%, 100%);
      font-size: 1.65em;
      line-height: 170%;
      margin: 10px;
      text-align: center;
      @include mobile {
        width: 52.5%;
      }
      @include desktop {
        width: 25%;
      }
    }

    .list {
      list-style-type: none;

      .item {
        color: hsl(0, 0%, 100%);
        margin: 30px;
        //text-align: center;

        .link {
          @include hide-link-styles;
        }
      }
    }
  }

  .credits {
    align-items: center;
    background-color: hsl(0, 0%, 10.5%);
    color: hsl(0, 0%, 100%);
    padding: 5px 8px;
    @include mobile {
      @include flex(column);
    }
    @include desktop {
      @include flex(row);
    }

    .title {
      flex: 1;

      .link {
        @include hide-link-styles;
      }
    }

    .copyright {
      font-size: 0.9em;
      @include mobile {
        margin: 10px;
      }
    }
  }
}
</style>
