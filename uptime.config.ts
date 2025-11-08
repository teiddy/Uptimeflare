const pageConfig = {
  // Title for your status page
  title: "hxd 网站检测",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://vwo50.club', label: 'Blog' },
    { link: 'https://u1s1.one', label: 'Nav Site' },
    { link: 'https://md.u1s1.one/', label: 'markdown', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'google_monitor',
      name: '醉猫电影站',
      method: 'GET',
      target: 'https://tg414300.com',
        tooltip: '醉猫电影站',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://www.tg414300.com',
    },

 {
      id: 'google_monitor',
      name: 'My Nav Monitor',
      method: 'GET',
      target: 'https://u1s1.one',
     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

    {
      id: 'ssh_monitor',
      name: 'Oracle Monitor',
      method: 'TCP_PING',
      target: 'X.X.X.X:22',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
