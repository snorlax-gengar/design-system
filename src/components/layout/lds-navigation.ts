export interface LDSSidebarItem {
  id: string;
  label: string;
  badge?: string;
}

export interface LDSSidebarGroup {
  number: string;
  title: string;
  items: LDSSidebarItem[];
}

export const LDS_NAVIGATION_GROUPS: LDSSidebarGroup[] = [
  {
    number: '01',
    title: 'OVERVIEW',
    items: [
      { id: 'page-header', label: 'System Overview', badge: 'v1.2' },
      { id: 'brand-story', label: 'Family Philosophy' },
      { id: 'download-center', label: 'Asset Download Center' },
    ],
  },
  {
    number: '02',
    title: 'BRAND ASSETS',
    items: [
      { id: 'brand-asset', label: 'Official Vector Logo' },
      { id: 'favicon-system', label: 'Favicon & App Icon' },
    ],
  },
  {
    number: '03',
    title: 'FOUNDATIONS',
    items: [
      { id: 'colors', label: 'Color Matrix (Aero Sky)', badge: 'Core' },
      { id: 'typography', label: 'Typography Hierarchy' },
      { id: 'elevation-spacing', label: 'Elevation & Spacing' },
    ],
  },
  {
    number: '04',
    title: 'COMPONENTS',
    items: [
      { id: 'buttons', label: 'Button' },
      { id: 'form-controls', label: 'Form Controls & Inputs' },
      { id: 'toggles-checkboxes', label: 'Toggle & Checkbox' },
      { id: 'calendar-component', label: 'Calendar' },
      { id: 'badge-status', label: 'Badge & Status Pills' },
    ],
  },
  {
    number: '05',
    title: 'DEVELOPER GUIDES',
    items: [
      { id: 'quickstart', label: 'Quick Start (Tailwind & CSS)' },
      { id: 'showcase', label: 'Family Product Showcase' },
    ],
  },
];
