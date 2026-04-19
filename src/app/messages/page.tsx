import { Card, CardContent, Avatar } from "@/components/ui";
import { MessageCircle, Check, CheckCheck } from "lucide-react";

const conversations = [
  {
    id: "c1",
    name: "山田 太郎",
    lastMessage: "来週の月曜日、14時からオンラインMTGいかがですか？",
    time: "14:32",
    unread: 2,
    online: true,
  },
  {
    id: "c2",
    name: "中村 彩花",
    lastMessage: "ポートフォリオ拝見しました。UIリニューアルの件、ぜひお話したいです。",
    time: "昨日",
    unread: 0,
    online: false,
  },
  {
    id: "c3",
    name: "佐藤 花子",
    lastMessage: "マーケティング戦略の概要資料をお送りしました。ご確認ください。",
    time: "4/17",
    unread: 0,
    online: true,
  },
];

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">メッセージ</h1>
        <p className="mt-1 text-neutral-500">
          マッチ成立後のダイレクトメッセージ
        </p>
      </div>

      <div className="space-y-2">
        {conversations.map((conv) => (
          <Card key={conv.id} className="cursor-pointer hover:bg-neutral-50/50">
            <CardContent className="flex items-center gap-4">
              <div className="relative">
                <Avatar name={conv.name} size="md" />
                {conv.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-900">
                    {conv.name}
                  </p>
                  <span className="text-xs text-neutral-400">{conv.time}</span>
                </div>
                <p className="mt-0.5 text-xs text-neutral-500 line-clamp-1">
                  {conv.lastMessage}
                </p>
              </div>

              {conv.unread > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 px-1.5 text-[10px] font-bold text-white">
                  {conv.unread}
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {conversations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <MessageCircle className="h-12 w-12 text-neutral-300" />
          <h3 className="mt-4 text-lg font-semibold text-neutral-900">
            メッセージはまだありません
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            マッチが成立すると、ここでメッセージのやりとりができます
          </p>
        </div>
      )}
    </div>
  );
}
