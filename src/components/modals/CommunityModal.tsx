
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, TrendingUp, Clock, ThumbsUp, ChevronRight } from "lucide-react";

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommunityModal({ isOpen, onClose }: CommunityModalProps) {
  const forumCategories = [
    {
      title: "Aide générale",
      description: "Questions et réponses sur l'utilisation de Payzoo",
      posts: 142,
      members: 1205,
      lastActivity: "Il y a 5 min",
      trending: true
    },
    {
      title: "Nouveautés et annonces",
      description: "Découvrez les dernières fonctionnalités",
      posts: 23,
      members: 890,
      lastActivity: "Il y a 2h",
      trending: false
    },
    {
      title: "Conseils et astuces",
      description: "Partagez vos meilleures pratiques",
      posts: 87,
      members: 654,
      lastActivity: "Il y a 1h",
      trending: false
    },
    {
      title: "Problèmes techniques",
      description: "Support technique communautaire",
      posts: 56,
      members: 432,
      lastActivity: "Il y a 30 min",
      trending: false
    }
  ];

  const recentDiscussions = [
    {
      title: "Comment optimiser mes paiements récurrents ?",
      author: "Marie L.",
      replies: 12,
      likes: 8,
      timeAgo: "Il y a 2h"
    },
    {
      title: "Nouvelle fonctionnalité : Analyse des dépenses",
      author: "Équipe Payzoo",
      replies: 45,
      likes: 32,
      timeAgo: "Il y a 4h"
    },
    {
      title: "Partage d'expérience : Migration vers Payzoo",
      author: "Thomas B.",
      replies: 7,
      likes: 15,
      timeAgo: "Il y a 6h"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            Communauté Payzoo
          </DialogTitle>
          <DialogDescription>
            Rejoignez notre communauté et échangez avec d'autres utilisateurs
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-background/60 rounded-lg">
              <p className="text-2xl font-bold text-foreground">2.4k</p>
              <p className="text-xs text-muted-foreground">Membres actifs</p>
            </div>
            <div className="text-center p-3 bg-background/60 rounded-lg">
              <p className="text-2xl font-bold text-foreground">308</p>
              <p className="text-xs text-muted-foreground">Discussions</p>
            </div>
            <div className="text-center p-3 bg-background/60 rounded-lg">
              <p className="text-2xl font-bold text-foreground">1.2k</p>
              <p className="text-xs text-muted-foreground">Réponses aujourd'hui</p>
            </div>
          </div>

          {/* Forum Categories */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Catégories du forum</h4>
            <div className="space-y-3">
              {forumCategories.map((category, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg border border-border hover:border-black/30 cursor-pointer transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-medium text-foreground">{category.title}</h5>
                        {category.trending && (
                          <Badge className="bg-orange-50 text-orange-700 border-orange-200 text-xs">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Tendance
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {category.posts} posts
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {category.members} membres
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {category.lastActivity}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Discussions récentes</h4>
            <div className="space-y-3">
              {recentDiscussions.map((discussion, index) => (
                <div
                  key={index}
                  className="group p-3 rounded-lg hover:bg-background/60 cursor-pointer transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm mb-1">{discussion.title}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Par {discussion.author}</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {discussion.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {discussion.likes}
                        </span>
                        <span>{discussion.timeAgo}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Rejoignez la conversation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Posez vos questions, partagez vos expériences et aidez d'autres utilisateurs
              </p>
              <Button className="bg-black hover:bg-black/90 text-white">
                <Users className="w-4 h-4 mr-2" />
                Rejoindre la communauté
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
