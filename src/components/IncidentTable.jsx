import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Tooltip from "@mui/material/Tooltip";

const data = [
  {
    id: "INC-001",
    title: "系統無法登入系統無法登入系統無法登入系統無法登入系統無法登入",
    status: "處理中",
    priority: "高",
    assignee: "王小明",
    createdAt: "2024-01-10",
  },
  {
    id: "INC-002",
    title: "頁面顯示異常",
    status: "待處理",
    priority: "中",
    assignee: "李小華",
    createdAt: "2024-01-11",
  },
  {
    id: "INC-003",
    title: "資料匯出失敗",
    status: "已解決",
    priority: "低",
    assignee: "陳大偉",
    createdAt: "2024-01-12",
  },
];

const tooltipProps = {
  placement: "top",
  arrow: true,
  popperProps: { style: { zIndex: 9999 } },
  componentsProps: {
    tooltip: {
      sx: {
        bgcolor: "#1e293b",
        color: "#f8fafc",
        fontSize: "0.75rem",
        fontWeight: 500,
        borderRadius: "6px",
        px: 1.5,
        py: 0.75,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        maxWidth: 320, // tooltip 最大寬度
        whiteSpace: "normal", // tooltip 內文字可換行
      },
    },
    arrow: {
      sx: { color: "#1e293b" },
    },
  },
};

const withTooltip =
  (label) =>
  ({ column }) => (
    <Tooltip title={column.columnDef.header} {...tooltipProps}>
      <span style={{ cursor: "default" }}>{label}</span>
    </Tooltip>
  );

const withCellTooltip = (value) => (
  <Tooltip title={value} {...tooltipProps}>
    <span
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "normal",
        cursor: "default",
      }}>
      {value}
    </span>
  </Tooltip>
);

export default function IncidentList() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "案件編號",
        size: 130,
        minSize: 100,
        Header: withTooltip("案件編號"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
      {
        accessorKey: "title",
        header: "標題",
        size: 280,
        minSize: 150,
        Header: withTooltip("標題"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
      {
        accessorKey: "status",
        header: "狀態",
        size: 130,
        minSize: 100,
        Header: withTooltip("狀態"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
      {
        accessorKey: "priority",
        header: "優先級",
        size: 120,
        minSize: 100,
        Header: withTooltip("優先級"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
      {
        accessorKey: "assignee",
        header: "負責人",
        size: 130,
        minSize: 100,
        Header: withTooltip("負責人"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
      {
        accessorKey: "createdAt",
        header: "建立日期",
        size: 140,
        minSize: 110,
        Header: withTooltip("建立日期"),
        Cell: ({ cell }) => withCellTooltip(cell.getValue()),
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnOrdering
      enableColumnResizing
      enableColumnActions={false}
      columnResizeMode="onChange"
      enableSorting
      enableColumnFilters
      icons={{
        DragHandleIcon: () => <DragIndicatorIcon fontSize="small" />,
      }}
      muiTableHeadCellProps={{
        sx: {
          whiteSpace: "nowrap",
          overflow: "visible",
          "& .Mui-TableHeadCell-Content": { overflow: "visible" },
          "& .Mui-TableHeadCell-Content-Labels": { overflow: "visible", flexWrap: "nowrap" },
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          verticalAlign: "top", // cell 內容靠上對齊
        },
      }}
    />
  );
}
