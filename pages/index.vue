<template>
  <div role="document">
    <div class="hero">
      <h1 class="title">Countdown Works</h1>
      <h2 class="details">Create elegant countdowns for the current year</h2>
    </div>
    <Page>
      <div v-for="category in data" :key="category.title" class="category">
        <h1 class="title">{{ category.title }}</h1>
        <ul class="list-addition">
          <li v-for="item in category.countdowns" :key="item.name" class="item">
            <NuxtLink :to="`/countdowns/${item.name}-${item.link}`" class="link">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="category">
        <h1 class="title">Holidays</h1>
        <ul class="list">
          <li v-for="item in holidays" :key="item.name" class="item">
            <NuxtLink :to="item.link" class="link">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Page>
  </div>
</template>

<script>
import Page from '@/components/layout/Page'
import holidays from '@/shared/holidays'
import { db } from '@/db/functions'

export default {
  components: {
    Page
  },
  data() {
    return {
      holidays,
      data: []
    }
  },
  firestore() {
    return {
      data: db.collection('categories')
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @include flex(column);

  align-items: center;
  background: linear-gradient(0deg, hsla(0, 0%, 100%, 0.65), hsla(0, 0%, 100%, 0.65)),
    no-repeat 50% / cover url('@/img/hero-bg.webp');
  height: 450px;
  justify-content: center;

  .title {
    @include mobile {
      font-size: 3.5em;
      margin: 15px;
      text-align: center;
    }
    @include desktop {
      font-size: 5.5em;
      line-height: 170%;
      margin: 10px;
      padding: 0 10px;
    }
  }

  .details {
    text-align: center;
    @include mobile {
      font-size: 2.05em;
      margin: 15px;
    }
    @include desktop {
      font-size: 3em;
      font-weight: 400;
      line-height: 170%;
      margin: 10px;
      padding: 0 10px;
    }
  }
}

.category {
  @include mobile {
    @include flex(column);

    align-items: center;
    margin-top: 100px;

    &:first-child {
      margin-top: 0;
    }
  }

  .title {
    border-bottom: 2px solid hsl(322, 81%, 43%);
    line-height: 170%;
    text-align: center;
    @include mobile {
      font-size: 3em;
      margin: 0 0 50px;
      width: 75%;
    }
    @include desktop {
      font-size: 4em;
      margin: 0 0 100px;
    }
  }

  .list-addition {
    list-style-type: none;
    @include mobile {
      @include flex(column);

      width: 100%;
    }

    .item {
      @include flex(column);

      border-bottom: 2px solid hsl(315, 25%, 3%);
      font-size: 2em;
      justify-content: center;
      line-height: 170%;
      text-align: center;
      @include desktop {
        margin: 0 auto 100px;
        width: 65%;
      }

      .link {
        @include hide-link-styles;
        @include mobile {
          padding: 10px 20px;
        }
      }
    }
  }

  .list {
    list-style-type: none;
    @include mobile {
      @include flex(column);

      width: 100%;
    }

    @include desktop {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }

    .item {
      @include flex(column);

      border: 1px solid;
      font-size: 2em;
      justify-content: center;
      text-align: center;
      @include mobile {
        border-left: 0;
        border-right: 0;
        height: 175px;

        &:first-child {
          border-top: 2px solid;
        }

        &:last-child {
          border-bottom: 2px solid;
        }
      }
      @include desktop {
        height: 250px;

        &:nth-child(3n) {
          border-right: 0;
        }

        &:nth-child(3n + 1) {
          border-left: 0;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          border-top: 0;
        }

        &:nth-last-child(-n + 3) {
          border-bottom: 0;
        }
      }

      .link {
        @include hide-link-styles;
        @include mobile {
          padding: 10px 20px;
        }
      }
    }
  }
}
</style>
