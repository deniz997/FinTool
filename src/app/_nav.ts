import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Tables'
  },
  {
    name: 'Parameters',
    icon: 'icon-note',
    url: '/parameter',
    children: [
      {
        name: 'Dialog Fields',
        url: '/parameter/dialog',
        icon: 'icon-puzzle',
      },
      {
        name: 'User',
        url: '/parameter/user',
        icon: 'fa fa-id-card'
      },
      {
        name: 'Cost Center',
        url: '/parameter/cost-center',
        icon: 'fa fa-tags'
      },
      {
        name: 'SLA Item',
        url: '/parameter/sla-item',
        icon: 'icon-list'
      },
      {
        name: 'PGK Costs',
        url: '/parameter/pgk-costs-per-person',
        icon: 'icon-tag'
      },
      {
        name: 'External Costs',
        url: '/parameter/external-costs-per-person',
        icon: 'icon-tag'
      },
      {
        name: 'EUR/TL Assumption',
        url: '/parameter/eur-tl-macro-assumption',
        icon: 'icon-refresh'
      },
      {
        name: 'D. Travel Rate',
        url: '/parameter/department-travel-rate',
        icon: 'icon-plane'
      },
      {
        name: 'SLA Reference',
        url: '/parameter/sla-reference',
        icon: 'icon-action-redo'
      }
    ]
  },
  {
    name: 'Cost Inputs',
    icon: 'icon-wallet',
    url: '/cost',
    children: [
      {
        name: 'Int Headcount',
        icon: 'icon-user',
        url: '/cost/int-headcount'
      },
      {
        name: 'Ext Headcount',
        icon: 'icon-user',
        url: '/cost/ext-headcount'
      },
      {
        name: 'E4 Related Costs',
        icon: 'icon-link',
        url: '/cost/e4-related'
      }
    ]

  },
  {
    name: 'Revenue Inputs',
    icon: 'fa fa-money',
    url: '/revenue',
    children: [
      {
        name: 'Actual SLA Vol',
        icon: 'fa fa-list',
        url: '/revenue/actual-sla-vol'
      },
      {
        name: 'Opportunities Vol',
        icon: 'fa fa-check',
        url: '/revenue/opportunities-sla-vol'
      }
    ]

  }
];
