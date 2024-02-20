'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  }
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 lg:col-span-2">
            <label htmlFor="report_date" className="block mb-1">報告日</label>
            <InputDate id="report_date" />
          </div>
          <div className="col-span-3 lg:col-span-4">
            <label htmlFor="job_name" className="block mb-1">業務名</label>
            <InputText id="job_name" />
          </div>
          <div className="col-span-3 lg:col-span-3">
            <label htmlFor="company" className="block mb-1">関与先</label>
            <InputText id="company" />
          </div>
          <div className="col-span-3 lg:col-span-3">
            <label htmlFor="reporter" className="block mb-1">報告者</label>
            <InputText id="reporter" />
          </div>
        </div>

        <div className="mt-2 inline-flex gap-x-2">
          <Button color="blue" onClick={onClickFiler}>絞り込み</Button>
          <Button color="gray" onClick={onClickReset}>リセット</Button>
          <Button color="blue" onClick={onClickAdd}>新規作成</Button>
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">開始日時</th>
                <th className="border p-2">終了日時</th>
                <th className="border p-2">業務名</th>
                <th className="border p-2">関与先</th>
                <th className="border p-2">報告者</th>
                <th className="border p-2">更新日時</th>
                <th className="border p-2">作成日時</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  2024-02-05 10:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 12:00:00
                </td>
                <td className="border p-2">
                  <Anchor href="/daily_report_bodies/show">サンプル</Anchor>
                </td>
                <td className="border p-2">
                  支援サービス株式会社
                </td>
                <td className="border p-2">
                  支援　太郎
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  2024-02-05 10:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 12:00:00
                </td>
                <td className="border p-2">
                  <Anchor href="/daily_report_bodies/show">サンプル</Anchor>
                </td>
                <td className="border p-2">
                  支援サービス株式会社
                </td>
                <td className="border p-2">
                  支援　太郎
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  2024-02-05 10:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 12:00:00
                </td>
                <td className="border p-2">
                  <Anchor href="/daily_report_bodies/show">サンプル</Anchor>
                </td>
                <td className="border p-2">
                  支援サービス株式会社
                </td>
                <td className="border p-2">
                  支援　太郎
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 16:00:00
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
