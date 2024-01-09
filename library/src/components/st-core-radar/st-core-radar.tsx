import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

import { ColorsStatus } from './models';
import 'stencil-apexcharts';

@Component({
  tag: 'st-core-radar',
  styleUrl: 'st-core-radar.scss',
  shadow: true,
})
export class StCoreRadar {
  @Prop() radarTitle = 'Radar test';
  @Prop() testMode = false;
  @Prop() userStatus: number[] = [];
  @Prop() targetStatus: number[] = [];
  @Prop() categories: string[] = [];
  @Prop() colors: ColorsStatus;
  @Prop() options = {};

  @State() nPoints = 5;
  @State() nSeries = 2;
  @State() serieSelected: number | string = '';
  @State() pointsToSerie = '';
  @State() chartOptions = {
    series: [],
    chart: {
      width: 500,
      height: 500,
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      events:{
        legendClick: function(chart){
          chart.resetSeries();
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    markers: {
      size: 0
    },
    title: {
      text: ''
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.4
    },
    colors: [],
    xaxis: {
      categories: [],
      labels: {
        style:{
          fontSize: '11px'
        }
      },
    },
    yaxis: {
      min: 0.0,
      max: 5.0,
      tickAmount: 5,
      labels: {
        formatter(_) {
          return '';
        }
      }
    }
  };

  chartRef: Element;
  componentWillLoad() {
    this.changeState();
  }

  changeState() {
    this.chartOptions = {
      ...this.chartOptions,
      series: this.getSeries(),
      title: { ...this.chartOptions.title, text: this.radarTitle },
      colors: this.getColors(),
      xaxis: {
        ...this.chartOptions.xaxis,
        categories: this.getCategories()
      },
      ...this.options
    };
  }

  @Watch('radarTitle')
  @Watch('userStatus')
  @Watch('targetStatus')
  @Watch('categories')
  @Watch('colors')
  @Watch('options')
  handlePropChange() {
    this.chartRef?.children[0].children.length && this.changeState();
  }

  handleChangePoints(event) {
    this.nPoints = +event.target.value;
  }

  handleChangeSeries(event) {
    this.nSeries = +event.target.value;
  }

  handleChangeSerieSelected(event) {
    this.serieSelected = +event.target.value;
  }

  handleChangePointsToSerie(event) {
    this.pointsToSerie = event.target.value;
  }

  getSeries() {
    if (this.testMode) {
      const series = Array.from(Array(this.nSeries).keys()).map((_, i) => ({
        name: `Serie ${i + 1}`,
        data: Array.from(Array(this.nPoints).keys()).map(() => +(Math.random() * (4.0 - 0.0 + 1) + 0.0).toFixed(1))
      }));
      return series.map((serie) => {
        if (serie.name === `Serie ${this.serieSelected}`) {
          const newData = this.pointsToSerie.split(',').map((el) => +el);
          return {
            ...serie,
            data: [...newData, ...serie.data.slice(newData.length)]
          };
        }
        return serie;
      });
    }
    return [
      {
        name: 'Goal',
        data: this.targetStatus
      },
      {
        name: 'You',
        data: this.userStatus
      }
    ];
  }

  getCategories() {
    if (this.testMode) {
      return Array.from(Array(this.nPoints).keys()).map(element => `Tech ${element + 1}`);
    }
    const categoriesToShow = this.categories.map((category) =>
      category.length > 25 ? category.substring(0, 25) + '...' : category
    );
    return categoriesToShow;
  }

  getColors() {
    if (this.testMode) {
      return Array.from(Array(this.nSeries).keys()).map(() => '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    }
    return [this.colors?.goal, this.colors?.user];
  }

  render() {
    return (
      <Host>
        {this.testMode &&
          (<div class="inputs">
            <form>
              <div class="form">
                <div>
                  <label><strong>N° Points:</strong></label>
                  <input
                    class="form-control w-25 mb-2" type="number" value={this.nPoints} onInput={(event) => this.handleChangePoints(event)} />
                </div>
                <div>
                  <label><strong>N° Series:</strong></label>
                  <input
                    class="form-control w-25 mb-3" type="number" value={this.nSeries} onInput={(event) => this.handleChangeSeries(event)} />
                </div>
                <div>
                  <label><strong>Select a serie:</strong></label>
                  <div class="d-flex flex-row">
                    <input
                      class="form-control w-25 mb-3"
                      type="number"
                      value={this.serieSelected}
                      min={1}
                      max={this.nSeries}
                      onInput={(event) => this.handleChangeSerieSelected(event)}
                    />
                    {this.serieSelected && <input
                      class="form-control w-25 mb-3"
                      type="text"
                      value={this.pointsToSerie}
                      maxlength={this.nPoints + this.nPoints + 1} // Points + commas
                      onInput={(event) => this.handleChangePointsToSerie(event)}
                      placeholder="1,2,3,4,5..."
                    />}
                  </div>
                </div>
              </div>
            </form>
          </div>)
        }
        <apex-chart
          type="radar"
          options={this.chartOptions}
          ref={(el) => this.chartRef = el}
        ></apex-chart>
      </Host>
    );
  }

}
