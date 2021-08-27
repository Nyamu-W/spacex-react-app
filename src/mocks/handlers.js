import { rest } from "msw";

export const handlers = [
  /// Get Launches test: successful request
  rest.get("https://api.spacexdata.com/v4/launches/past", (req, res, ctx) => {
    console.log("Hit MSW successfully!!!");
    return res(
      ctx.status(200),
      ctx.json([
        {
          fairings: {
            reused: true,
            recovery_attempt: true,
            recovered: true,
            ships: ["60c8c7a45d4819007ea69871"],
          },
          links: {
            patch: {
              small: "https://imgur.com/IJWn9pK.png",
              large: "https://imgur.com/u49XVx4.png",
            },
            reddit: {
              campaign:
                "https://www.reddit.com/r/spacex/comments/nz7rai/transporter2_launch_campaign_thread/",
              launch:
                "https://www.reddit.com/r/spacex/comments/o9ki7u/rspacex_transporter2_launch_discussion_and/",
              media: null,
              recovery:
                "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/",
            },
            flickr: {
              small: [],
              original: [
                "https://live.staticflickr.com/65535/51283430951_a9e5a41141_o.jpg",
                "https://live.staticflickr.com/65535/51283430936_3852120bbe_o.jpg",
                "https://live.staticflickr.com/65535/51283604493_d1a088b7c9_o.jpg",
                "https://live.staticflickr.com/65535/51284454795_591717faee_o.jpg",
                "https://live.staticflickr.com/65535/51284454810_9fdd0e8db4_o.jpg",
                "https://live.staticflickr.com/65535/51283604443_6d92fe1231_o.jpg",
                "https://live.staticflickr.com/65535/51283604428_b24ebf1b5f_o.jpg",
                "https://live.staticflickr.com/65535/51283604438_7202e2a388_o.jpg",
              ],
            },
            presskit: null,
            webcast: "https://youtu.be/sSiuW1HcGjA",
            youtube_id: "sSiuW1HcGjA",
            article: null,
            wikipedia: null,
          },
          static_fire_date_utc: "2021-06-22T15:24:00.000Z",
          static_fire_date_unix: 1624375440,
          tbd: false,
          net: false,
          window: 0,
          rocket: "5e9d0d95eda69973a809d1ec",
          success: true,
          details: "Test Data... Test Data... Test Data...",
          ships: ["60c8c7a45d4819007ea69871"],
          capsules: [],
          payloads: ["608ac397eb3e50044e3630e7"],
          launchpad: "5e9e4501f509094ba4566f84",
          auto_update: true,
          launch_library_id: "5d248abe-17ef-43ce-9c04-aef33af40520",
          failures: [],
          crew: [],
          flight_number: 132,
          name: "Test Launch 1: Transporter-2",
          date_utc: "2021-06-30T19:31:00.000Z",
          date_unix: 1625081460,
          date_local: "2021-06-30T15:31:00-04:00",
          date_precision: "hour",
          upcoming: false,
          cores: [
            {
              core: "5ef670f10059c33cee4a826c",
              flight: 8,
              gridfins: true,
              legs: true,
              reused: true,
              landing_attempt: true,
              landing_success: true,
              landing_type: "RTLS",
              landpad: "5e9e3032383ecb267a34e7c7",
            },
          ],
          id: "600f9b6d8f798e2a4d5f979f",
        },
        {
          fairings: {
            reused: false,
            recovery_attempt: true,
            recovered: true,
            ships: ["60c8c7a45d4819007ea69871"],
          },
          links: {
            patch: {
              small: "https://i.imgur.com/sZIYIsl.png",
              large: "https://i.imgur.com/n4PN2ko.png",
            },
            reddit: {
              campaign:
                "https://www.reddit.com/r/spacex/comments/nuud0l/gps_iii_sv05_launch_campaign_thread/",
              launch:
                "https://www.reddit.com/r/spacex/comments/o0gcnq/rspacex_gps_iii_sv05_launch_discussion_and/",
              media: null,
              recovery: null,
            },
            flickr: {
              small: [],
              original: [
                "https://live.staticflickr.com/65535/51254829184_e6e1d0d79c_o.jpg",
                "https://live.staticflickr.com/65535/51253353892_de82b01e23_o.jpg",
                "https://live.staticflickr.com/65535/51254285968_288383ce6e_o.jpg",
                "https://live.staticflickr.com/65535/51254829154_3c5980c086_o.jpg",
                "https://live.staticflickr.com/65535/51253353882_e59ea4df4f_o.jpg",
                "https://live.staticflickr.com/65535/51254829139_ca68c19689_o.jpg",
                "https://live.staticflickr.com/65535/51262926489_9fbce20e9c_o.jpg",
                "https://live.staticflickr.com/65535/51262926469_974292477d_o.jpg",
                "https://live.staticflickr.com/65535/51262179176_e4302db116_o.jpg",
                "https://live.staticflickr.com/65535/51263224735_3210fb7499_o.jpg",
              ],
            },
            presskit: null,
            webcast: "https://youtu.be/QJXxVtp3KqI",
            youtube_id: "QJXxVtp3KqI",
            article: null,
            wikipedia: "https://en.wikipedia.org/wiki/GPS_Block_III",
          },
          static_fire_date_utc: "2021-06-13T19:30:00.000Z",
          static_fire_date_unix: 1623612600,
          tbd: false,
          net: false,
          window: 900,
          rocket: "5e9d0d95eda69973a809d1ec",
          success: true,
          details: "Test Data... Test Data... Test Data...",
          ships: [
            "60c8c7a45d4819007ea69871",
            "5ee68c683c228f36bd5809b5",
            "5ea6ed2f080df4000697c910",
          ],
          capsules: [],
          payloads: ["5eb0e4d2b6c3bb0006eeb261"],
          launchpad: "5e9e4501f509094ba4566f84",
          auto_update: true,
          launch_library_id: "110c808a-a091-47ab-8532-4fa058c1de7a",
          failures: [],
          crew: [],
          flight_number: 131,
          name: "Test Launch 2: GPS III SV05",
          date_utc: "2021-06-17T16:09:00.000Z",
          date_unix: 1623946140,
          date_local: "2021-06-17T12:09:00-04:00",
          date_precision: "hour",
          upcoming: false,
          cores: [
            {
              core: "5f57c5440622a633027900a0",
              flight: 2,
              gridfins: true,
              legs: true,
              reused: true,
              landing_attempt: true,
              landing_success: true,
              landing_type: "ASDS",
              landpad: "5e9e3033383ecbb9e534e7cc",
            },
          ],
          id: "5eb87d4effd86e000604b390",
        },
      ])
    );
  }),
  /// Get Launches test: failed request
  // rest.get("https://api.spacexdata.com/v4/launches/past", (req, res, ctx) => {
  //   return res(ctx.status(404, "Failed request test"));
  // }),
];
