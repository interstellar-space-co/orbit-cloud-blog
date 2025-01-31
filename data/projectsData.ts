interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Protocol Parameter Optimization',
    description: `Gauntlet provides DeFi protocols with precise, simulation-based recommendations to dynamically optimize key parameters, such as collateral factors, liquidation thresholds, and interest rate curves. This ensures that protocols remain resilient against market volatility while maximizing capital efficiency.`,
    imgSrc: '/static/images/parameter-optimization.webp',
    href: '',
  },
  {
    title: 'Liquidation Risk Mitigation',
    description: `Using Gauntlet's on-chain simulations and stress tests, protocols can minimize cascading liquidations and systemic risk. By dynamically adjusting liquidation penalties and thresholds, Gauntlet helps prevent feedback loops that could destabilize entire markets.`,
    imgSrc: '/static/images/liquidation-mitigation.webp',
    href: '',
  },
  {
    title: 'On-chain Oracle Performance Monitoring',
    description: `Gauntlet's platform continuously monitors on-chain oracles for price deviations, delays, and potential vulnerabilities. By identifying oracle lag and anomalies, it helps protocols mitigate over-liquidation risks and protect against price manipulation.`,
    imgSrc: '/static/images/oracle-monitoring.webp',
    href: '',
  },
  {
    title: 'Stress Testing and Tail-Risk Management',
    description: `Gauntlet performs extensive stress testing to simulate extreme market conditions, such as liquidity crises, sudden price shocks, and cascading liquidations. Protocols use these insights to proactively adjust risk parameters and build long-term stability.`,
    imgSrc: '/static/images/stress-testing.webp',
    href: '',
  },
]

export default projectsData
