<template>
  <div>
    <Error v-if="error" />
    <Page v-else :title="countdown.name">
      <div class="countdown">
        <p class="date">
          Time {{ countdownTense }} {{ newYearsCheck ? 1 : countdown.month }}-{{
            newYearsCheck ? 1 : countdown.day
          }}-{{ newYearsCheck ? countdown.year + 1 : countdown.year }}:
        </p>
        <div class="clock">
          <p
            v-for="(item, index) in clock(
              countdownTense,
              countdownDoY,
              current.DoY,
              current.hour,
              current.minute,
              current.second
            )"
            :key="index"
            class="details"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </Page>
  </div>
</template>

<script>
import Page from '@/components/layout/Page'
import {
  currentDoY,
  currentHour,
  currentMinute,
  currentSecond,
  daysInMonths,
  currentYear,
  currentMonth
} from '@/shared/date'
import clock from '@/logic/pages/countdowns/clock'
import Error from '@/components/layout/Error'

export default {
  components: {
    Page,
    Error
  },
  data() {
    return {
      error: false,
      seo: {
        title: 'Countdown Works',
        description: 'Create elegant countdowns for the current year'
      },
      id: this.$route.params.id,
      current: {
        DoY: currentDoY(),
        hour: currentHour(),
        minute: currentMinute(),
        second: currentSecond()
      },
      clock
    }
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          name: 'description',
          content: this.seo.description
        }
      ]
    }
  },
  computed: {
    countdown() {
      if (this.id.includes('-')) {
        const id = this.id.split('-')

        return {
          name: id[0],
          month: Number(id[2]),
          day: Number(id[3]),
          year: Number(id[1]),
          icon: id[4]
        }
      } else {
        return {
          name: this.id[0],
          month: Number(this.id[2]),
          day: Number(this.id[3]),
          year: Number(this.id[1]),
          icon: this.id[4]
        }
      }
    },
    countdownDoY() {
      let day = 0
      for (let i = 0; i < this.countdown.month; i++) {
        day += daysInMonths[i]
      }
      day += this.countdown.day
      return day
    },
    countdownTense() {
      if (this.countdownDoY - currentDoY() <= 0) {
        return 'since'
      } else {
        return 'until'
      }
    },
    newYearsCheck() {
      if (this.countdown.month === 12 && this.countdown.day === 32) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    switch (this.id) {
      case 'newyears':
        this.id = ["New Year's", currentYear(), 12, 32]
        this.seo.title = `New Year's ${currentYear() + 1} Countdown - Countdown Works`
        this.seo.description = `Countdown to New Year's ${currentYear() + 1}`
        break
      case 'newyearseve':
        this.id = ["New Year's Eve", currentYear(), 12, 31]
        this.seo.title = `New Year's Eve ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to New Year's Eve ${currentYear()}`
        break
      case 'christmas':
        this.id = ['Christmas', currentYear(), 12, 25]
        this.seo.title = `Christmas ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Christmas ${currentYear()}`
        break
      case 'independence':
        this.id = ['Independance Day', currentYear(), 7, 4]
        this.seo.title = `Independance Day ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Independence Day ${currentYear()}`
        break
      case 'valentines':
        this.id = ["Valentines' Day", currentYear(), 2, 14]
        this.seo.title = `Valentines' Day ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Valentines' Day ${currentYear()}`
        break
      case 'halloween':
        this.id = ['Halloween', currentYear(), 10, 31]
        this.seo.title = `Halloween ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Halloween ${currentYear()}`
        break
      case 'juneteenth':
        this.id = ['Juneteenth', currentYear(), 6, 19]
        this.seo.title = `Juneteenth ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Juneteenth ${currentYear()}`
        break
      case 'christmaseve':
        this.id = ['Christmas Eve', currentYear(), 12, 24]
        this.seo.title = `Christmas Eve ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to Christmas Eve ${currentYear()}`
        break
      case 'aprilfools':
        this.id = ['April Fools', currentYear(), 4, 1]
        this.seo.title = `April Fools ${currentYear()} Countdown - Countdown Works`
        this.seo.description = `Countdown to April Fools ${currentYear()}`
        break
      default:
        if (
          !this.id.includes('-') ||
          this.id.split('-').length !== 4 ||
          Number(this.id.split('-')[1]) !== currentYear() ||
          isNaN(Number(this.id.split('-')[1])) ||
          isNaN(Number(this.id.split('-')[2])) ||
          isNaN(Number(this.id.split('-')[3])) ||
          Number(this.id.split('-')[3]) < 0 ||
          Number(this.id.split('-')[3]) > daysInMonths[currentMonth()] ||
          Number(this.id.split('-')[2]) < 0 ||
          Number(this.id.split('-')[2]) > 12 ||
          this.id.split('-')[0] === ''
        ) {
          this.error = true
        }
    }
  },
  mounted() {
    setInterval(() => {
      this.current.DoY = currentDoY()
      this.current.hour = currentHour()
      this.current.minute = currentMinute()
      this.current.second = currentSecond()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.countdown-icon {
  @include flex(column);

  fill: hsl(0, 0%, 55%);
  @include mobile {
    height: 110px;
    margin: 50px auto 0;
    width: 110px;
  }
  @include desktop {
    height: 200px;
    margin: 100px auto 0;
    width: 200px;
  }
}

.countdown {
  .date {
    color: hsl(0, 0%, 55%);
    text-align: center;
    @include mobile {
      font-size: 2em;
      margin: 10px 0 30px;
    }
    @include desktop {
      font-size: 3em;
    }
  }

  .clock {
    .details {
      text-align: center;
      @include mobile {
        font-size: 2.425em;
        margin: 10px 0;
      }
      @include desktop {
        font-size: 4.85em;
        margin: 20px 0;
      }
    }
  }
}
</style>
