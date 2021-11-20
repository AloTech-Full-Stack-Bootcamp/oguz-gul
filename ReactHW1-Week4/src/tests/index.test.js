import { SeriesTracker as SeriesTrackerTest } from "../index.js";
import { series } from "../data.js";

describe("SeriesTracker", () => {
  const mySeriesTracker = new SeriesTrackerTest(series);

  it("sets last serie watched", () => {
    expect(mySeriesTracker.lastSerie.name).toEqual("Black Mirror");
  });

  it("sets currently watching serie", () => {
    expect(mySeriesTracker.currentSerie.name).toEqual("Friends");
  });

  it("sets next serie to watch", () => {
    expect(mySeriesTracker.nextSerie.name).toEqual("Game of Thrones");
  });

  it("sets watched number of series (numberOfWatched)", () => {
    expect(mySeriesTracker.numberOfWatched).toEqual(2);
  });

  it("sets unwatched number of series (numberOfWatched)", () => {
    expect(mySeriesTracker.numberOfWatched).toEqual(2);
  });

  it("sets total number of series", () => {
    expect(mySeriesTracker.series.length).toEqual(8);
  });
});

describe("SeriesTracker, after adding a new Serie", () => {
  const mySeriesTracker = new SeriesTrackerTest(series);
  const newSerie = {
    id: "9",
    name: "Lost",
    genre: "Adventure",
    directorId: "4"
  };
  mySeriesTracker.add(newSerie);

  it("sets total number of series after adding a serie", () => {
    expect(mySeriesTracker.series.length).toEqual(9);
  });
});

describe("SeriesTracker, after adding a new Serie with watched prop", () => {
  const mySeriesTracker = new SeriesTrackerTest(series);
  const newSerie = {
    id: "9",
    name: "Lost",
    genre: "Adventure",
    directorId: "4",
    isWatched: true,
    finishedDate: "09.09.2020"
  };
  mySeriesTracker.add(newSerie);

  it("sets total number of series after adding a serie", () => {
    expect(mySeriesTracker.series.length).toEqual(9);
  });

  it("sets unwatched number of series (numberOfWatched)", () => {
    expect(mySeriesTracker.numberOfWatched).toEqual(3);
  });

  it("update last watched serie with the one with a more recent finished date value", () => {
    expect(mySeriesTracker.lastSerie.name).toEqual("Lost");
  });
});

describe("SeriesTracker, after finishSerie() method call", () => {
  const mySeriesTracker = new SeriesTrackerTest(series);
  mySeriesTracker.finishSerie();

  it("sets last serie watched", () => {
    expect(mySeriesTracker.lastSerie.name).toEqual("Friends");
  });

  it("sets currently watching serie", () => {
    expect(mySeriesTracker.currentSerie.name).toEqual("Game of Thrones");
  });

  it("sets next serie to watch", () => {
    expect(mySeriesTracker.nextSerie.name).toEqual("True Detective");
  });

  it("sets watched number of series (numberOfWatched)", () => {
    expect(mySeriesTracker.numberOfWatched).toEqual(3);
  });

  it("sets unwatched number of series (numberOfWatched)", () => {
    expect(mySeriesTracker.numberOfUnWatched).toEqual(5);
  });

  it("sets total number of series", () => {
    expect(mySeriesTracker.series.length).toEqual(8);
  });
});
